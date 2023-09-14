
const SubHeader = () => {
    return (
        <div className="container mx-auto md:px-36 md:pt-10 md:pb-5 py-5 px-6 ">
            <div className="flex justify-between">
                <div>
                    <h3>This is subheader.</h3>
                </div>
                <div>
                    <select className="select border-gray-300 border-2 w-full max-w-sm focus:border-cyan-500">
                        <option selected>Featured</option>
                        <option>Alphabetic</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;