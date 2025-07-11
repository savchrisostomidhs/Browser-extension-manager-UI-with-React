import Extension from "./Extension"
import data from "./../data.json"
import { useEffect, useState } from "react"
import "./Extensions.css"

function Extensions({ filter }: { filter: string }) {
    const [extensions, setExtensions] = useState<{ logo: string, name: string, description: string, isActive: boolean }[]>(data);
    const [remove, setRemove] = useState<null | string>(null);
    const [active, setActive] = useState<Record<string, boolean>>(() =>
        Object.fromEntries(data.map(ext => [ext.name, ext.isActive]))
    );

    useEffect(() => {
        if (remove !== null) {
            setExtensions(extensions.filter(ext => ext.name !== remove));
            setActive(prev => {
                const newState = { ...prev };
                delete newState[remove];
                return newState;
            });
        }
    }, [remove]);

    return (
        <div className="extensions">
            {extensions.map((ext, i) => {
                return (filter === "All" ||
                    filter === "Active" && active[ext.name] || filter === "Inactive" && !active[ext.name])
                    && <Extension
                        key={i}
                        logo={ext.logo}
                        name={ext.name}
                        description={ext.description}
                        active={active[ext.name]}
                        setActive={(val: boolean) =>
                            setActive(prev => ({ ...prev, [ext.name]: val }))
                        }
                        setRemove={setRemove}
                    />
            })}
        </div>
    )
}

export default Extensions