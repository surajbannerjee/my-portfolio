
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectDetails from './projectsContent';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const tabList = Array.from(new Set(projectDetails.map(p => p.project)));
// import { WORKS_1 } from '@/constants/images';

const ProjectsShowCase = () => {
    const [activeTab, setActiveTab] = React.useState(tabList[0]);
    const [visibleCount, setVisibleCount] = React.useState(5);
    const filteredProjects = projectDetails.filter(p => p.project === activeTab);
    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const isShowMore = visibleCount < filteredProjects.length;

    // Reset visibleCount when tab changes
    React.useEffect(() => {
        setVisibleCount(5);
    }, [activeTab]);

    return (
        <div className="w-full">
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
                {tabList.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300 text-[1.6rem] ${activeTab === tab ? 'bg-secondary text-black border-secondary shadow-lg' : 'bg-gray-900 text-WhiteT border-gray-700 hover:bg-secondary hover:text-black hover:border-secondary'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {/* Projects grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab + visibleCount}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-[5rem] p-4"
                >
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={project.title + index}
                            className="block bg-background rounded-[3rem] relative shadow-lg overflow-hidden border group border-gray-700 hover:border-secondary transition-all duration-300"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,255,246,0.30)' }}
                        >
                            <div className="w-full sm:h-[45rem] h-[35rem] bg-gray-800 flex items-center justify-center">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full"
                                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                                    height={1000}
                                    width={1000}
                                />
                            </div>
                            <div className="px-[3rem] py-[2rem] flex md:items-center items-start flex-row justify-between gap-[2rem] rounded-[2rem] absolute bottom-[2rem] bg-[rgba(0,0,0,0.5019607843)] w-[95%] left-1/2 transform -translate-x-1/2 backdrop-blur-lg">
                                <div className='flex flex-col w-[70%]'>
                                    <Link href={project.link} className="md:text-[3rem] text-[2.5rem] font-bold text-WhiteT mb-2 line-clamp-1 group-hover:text-secondary">{project.title}</Link>
                                    <p className="text-WhiteT text-[1.6rem] line-clamp-1">{project.description}</p>
                                </div>
                                <Link href={project.link} className="text-WhiteT md:text-[5rem] text-[3rem] md:h-[10rem] md:w-[10rem] h-[6rem] w-[6rem] md:rounded-[2rem] rounded-[1.2rem] flex items-center justify-center border border-gray-500 group-hover:border-secondary  group-hover:text-secondary">
                                    <Icon style={{ transform: 'rotate(45deg)' }} icon="guidance:up-arrow" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
            {/* Show More / Show Less Button */}
            {filteredProjects.length > 5 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => {
                            if (isShowMore) {
                                setVisibleCount(prev => Math.min(prev + 5, filteredProjects.length));
                            } else {
                                setVisibleCount(5);
                            }
                        }}
                        className="submitButton flex items-center justify-center text-center gap-2 rounded-[1.2rem] px-[3rem] py-[1.6rem] font-medium text-[2rem] leading-[1.2] w-fit mt-[2rem]"
                    >
                        {isShowMore ? 'Show More' : 'Show Less'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectsShowCase;