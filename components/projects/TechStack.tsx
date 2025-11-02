import React, { useState } from 'react'
import { Card } from '@/components/ui/Card'

interface Skill {
  name: string
  icon: string
  level: number
}

interface TechStackProps {
  categories: {
    name: string
    skills: Skill[]
  }[]
}

export function TechStack({ categories }: TechStackProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === index
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fade-in">
        {categories[activeTab].skills.map((skill, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{skill.icon}</span>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
