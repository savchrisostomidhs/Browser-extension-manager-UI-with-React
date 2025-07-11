import "./Extension.css"

interface ExtensionInfo {
    logo: string,
    name: string,
    description: string,
    active: boolean,
    setActive: (active: boolean) => void,
    setRemove: (name: string) => void
}

function Extension({ logo, name, description, active, setActive, setRemove }: ExtensionInfo) {
    return (
        <div className="extension">
            <div className="info">
                <img src={logo} alt="logo" />

                <div className="text">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="opt">
                <button className="remove" onClick={() => setRemove(name)}>Remove</button>

                <label className="toggle">
                    <input type="checkbox" onKeyDown={(e) => e.key === "Enter" ? setActive(!active) : null} onChange={() => setActive(!active)} checked={active} />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    )
}

export default Extension