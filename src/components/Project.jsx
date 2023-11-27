const groceries = [
    {
        id: "",
        name: ""
    }
]

function App() {
    return (
        <div>
            {groceries.map(grocery => <List grocery={grocery}></List>)}
        </div>
    )
}