
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectDetails from './projectsContent';

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
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.a
                            key={project.title + index}
                            href={project.link}
                            className="block bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:border-secondary transition-all duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,255,246,0.15)' }}
                        >
                            <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full"
                                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-WhiteT mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-base">{project.description}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ProjectsShowCase;