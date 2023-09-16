import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faCircle, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import halfCircle from '../../../assets/circle-half.png';

const SidebarMenu = () => {

    const customFilterStyles = {
        filter: 'invert(15%) sepia(7%) saturate(1635%) hue-rotate(162deg) brightness(98%) contrast(92%)'
    };

    return (
        <div className="md:container md:mx-auto invisible md:visible text-slate-600">
            <div className="mt-16 gap-10">
                <p className="uppercase font-bold text-[12px]">Style</p>
                <div className="my-4 text-[13px] flex justify-between cursor-pointer py-2 px-3 hover:border hover:rounded-xl hover:border-slate-300">
                    <div className='flex items-center gap-3'>
                        <FontAwesomeIcon icon={faCircle} />
                        <span>Solid</span>
                    </div>
                    <div>
                        05
                    </div>
                </div>
                <div className="my-4 text-[13px] flex justify-between cursor-pointer py-2 px-3 hover:border hover:rounded-xl hover:border-slate-300">
                    <div className='flex items-center gap-3'>
                        <FontAwesomeIcon icon={faCircleHalfStroke} />
                        <span>Regular</span>
                    </div>
                    <div>
                        05
                    </div>
                </div>
                <div className="my-4 text-[13px] flex justify-between cursor-pointer py-2 px-3 hover:border hover:rounded-xl hover:border-slate-300">
                    <div className='flex items-center gap-3'>
                        <img className='w-[15px]' src={halfCircle} alt="" style={customFilterStyles} />
                        <span>Light</span>
                    </div>
                    <div>
                        05
                    </div>
                </div>
                <div className="my-4 text-[13px] flex justify-between cursor-pointer py-2 px-3 hover:border hover:rounded-xl hover:border-slate-300">
                    <div className='flex items-center gap-3'>
                        <img className='w-[15px]' src={halfCircle} alt="" style={customFilterStyles} />
                        <span>Thin</span>
                    </div>
                    <div>
                        05
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
