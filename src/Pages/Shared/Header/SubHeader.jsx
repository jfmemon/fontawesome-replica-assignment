import { useEffect, useState } from "react";
import SubHeaderCategory from "./SubHeaderCategory";

const SubHeader = () => {
    const [category, setCategory] = useState([]);

    console.log(category);

    useEffect(() => {
        fetch("../../../../public/Category.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className="container mx-auto md:px-36 md:pt-10 md:pb-5 py-5 px-6">
            <div className="flex justify-between items-center">
                <div className="flex md:gap-16 gap-2 justify-center items-center p-0">
                    {
                        category.map(items => <SubHeaderCategory
                            key={items.id}
                            items={items}
                        ></SubHeaderCategory>)
                    }
                </div>
                <div>
                    <select className="select border-2 border-gray-300 w-full max-w-sm focus:border-x-4 focus:border-x-cyan-500">
                        <option selected>Featured</option>
                        <option>Alphabetic</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;