import React from "react"
import Menu from "./Menu"
import Categories from "./Categories"
import items from "./data"

function App() {
    const [menuItems, setMenuItems] = React.useState(items)
    // eslint-disable-next-line
    const [categories, setCategories] = React.useState([
        "all",
        ...new Set(items.map((item) => item.category)),
    ])

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items)
            return
        }

        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}

export default App
