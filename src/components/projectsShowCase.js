
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectDetails from './projectsContent';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const tabList = Array.from(new Set(projectDetails.map(p => p.project)));
// import { WORKS_1 } from '@/constants/images';

const ProjectsShowCase = () => {
    const [activeTab, setActiveTab] = React.useState(tabList[0]);
    const filteredProjects = projectDetails.filter(p => p.project === activeTab);

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
                    key={activeTab}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-[5rem] p-4"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title + index}
                            className="block bg-background rounded-[3rem] relative shadow-lg overflow-hidden border border-gray-700 hover:border-secondary transition-all duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,255,246,0.15)' }}
                        >
                            <div className="w-full h-[45rem] bg-gray-800 flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full"
                                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                                />
                            </div>
                            <div className="px-[3rem] py-[2rem] flex items-center justify-between rounded-[2rem] absolute bottom-[2rem] bg-[rgba(0,0,0,0.5019607843)] w-[95%] left-1/2 transform -translate-x-1/2 backdrop-blur-lg">
                                <div>
                                    <h3 className="text-[3rem] font-bold text-WhiteT mb-2 line-clamp-1">{project.title}</h3>
                                    <p className="text-WhiteT text-[1.6rem] line-clamp-1">{project.description}</p>
                                </div>
                                <Link href={project.link} className="text-WhiteT text-[5rem] h-[10rem] w-[10rem] rounded-[2rem] flex items-center justify-center border border-gray-500">
                                    <Icon style={{ transform: 'rotate(45deg)' }} icon="guidance:up-arrow" />
                                </Link>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ProjectsShowCase;