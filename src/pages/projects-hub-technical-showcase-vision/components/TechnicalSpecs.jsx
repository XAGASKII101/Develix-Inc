import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSpecs = ({ project }) => {
  const [activeTab, setActiveTab] = useState('architecture');

  const tabs = [
    { id: 'architecture', label: 'Architecture', icon: 'Layers' },
    { id: 'performance', label: 'Performance', icon: 'Zap' },
    { id: 'security', label: 'Security', icon: 'Shield' },
    { id: 'api', label: 'API Docs', icon: 'Code' }
  ];

  const renderArchitecture = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-space-grotesk font-bold text-lg text-foreground">System Overview</h4>
          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            {project?.architecture?.overview?.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-foreground">{item?.component}</div>
                  <div className="text-xs text-muted-foreground">{item?.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-space-grotesk font-bold text-lg text-foreground">Data Flow</h4>
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="space-y-3">
              {project?.architecture?.dataFlow?.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">{step?.step}</div>
                    <div className="text-xs text-muted-foreground">{step?.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Diagram */}
      <div className="space-y-4">
        <h4 className="font-space-grotesk font-bold text-lg text-foreground">Technology Stack</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project?.architecture?.techLayers?.map((layer, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name={layer?.icon} size={20} className="text-primary" />
                <h5 className="font-semibold text-foreground">{layer?.name}</h5>
              </div>
              <div className="space-y-2">
                {layer?.technologies?.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{tech?.name}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">{tech?.version}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {project?.performance?.metrics?.map((metric, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-2">{metric?.value}</div>
            <div className="text-sm font-medium text-foreground mb-1">{metric?.label}</div>
            <div className="text-xs text-muted-foreground">{metric?.description}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-space-grotesk font-bold text-lg text-foreground">Load Testing Results</h4>
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="space-y-3">
              {project?.performance?.loadTesting?.map((test, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="Activity" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{test?.scenario}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-primary">{test?.result}</div>
                    <div className="text-xs text-muted-foreground">{test?.metric}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-space-grotesk font-bold text-lg text-foreground">Optimization Strategies</h4>
          <div className="space-y-3">
            {project?.performance?.optimizations?.map((optimization, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-card border border-border rounded-lg">
                <Icon name="Zap" size={16} className="text-accent mt-1" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">{optimization?.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{optimization?.description}</div>
                  <div className="text-xs text-primary mt-1 font-medium">
                    Improvement: {optimization?.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-space-grotesk font-bold text-lg text-foreground">Security Measures</h4>
          <div className="space-y-3">
            {project?.security?.measures?.map((measure, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-card border border-border rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={16} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">{measure?.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{measure?.description}</div>
                  <div className="text-xs text-green-600 mt-1 font-medium">
                    Status: {measure?.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-space-grotesk font-bold text-lg text-foreground">Audit Reports</h4>
          <div className="space-y-3">
            {project?.security?.audits?.map((audit, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-foreground">{audit?.auditor}</div>
                  <div className="text-xs text-muted-foreground">{audit?.date}</div>
                </div>
                <div className="text-xs text-muted-foreground mb-2">{audit?.scope}</div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    {audit?.result}
                  </span>
                  <span className="text-xs text-primary font-medium">
                    Score: {audit?.score}/100
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-space-grotesk font-bold text-lg text-foreground">Compliance Standards</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project?.security?.compliance?.map((standard, index) => (
            <div key={index} className="text-center p-4 bg-card border border-border rounded-lg">
              <Icon name="Award" size={24} className="text-primary mx-auto mb-2" />
              <div className="text-sm font-medium text-foreground">{standard?.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{standard?.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAPI = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-space-grotesk font-bold text-lg text-foreground">API Endpoints</h4>
          <div className="space-y-3">
            {project?.api?.endpoints?.map((endpoint, index) => (
              <div key={index} className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    endpoint?.method === 'GET' ? 'bg-green-100 text-green-800' :
                    endpoint?.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                    endpoint?.method === 'PUT'? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {endpoint?.method}
                  </span>
                  <code className="text-sm font-mono text-foreground">{endpoint?.path}</code>
                </div>
                <div className="text-xs text-muted-foreground mb-2">{endpoint?.description}</div>
                <div className="text-xs text-primary font-medium">
                  Rate Limit: {endpoint?.rateLimit}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-space-grotesk font-bold text-lg text-foreground">SDK & Libraries</h4>
          <div className="space-y-3">
            {project?.api?.sdks?.map((sdk, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-foreground">{sdk?.language}</div>
                  <div className="text-xs text-muted-foreground">{sdk?.version}</div>
                </div>
                <div className="text-xs text-muted-foreground mb-2">{sdk?.description}</div>
                <div className="flex items-center space-x-2">
                  <Icon name="Download" size={14} className="text-primary" />
                  <span className="text-xs text-primary font-medium">{sdk?.downloads} downloads</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-space-grotesk font-bold text-lg text-foreground">Code Examples</h4>
        <div className="bg-primary/5 rounded-lg p-4">
          <div className="font-mono text-sm space-y-2 text-foreground">
            <div className="text-muted-foreground">// Initialize Develix SDK</div>
            <div><span className="text-primary">const</span> develix = <span className="text-accent">new</span> <span className="text-secondary">DevelixSDK</span>({`{`}</div>
            <div className="pl-4">
              <div><span className="text-secondary">apiKey:</span> <span className="text-green-500">'your-api-key'</span>,</div>
              <div><span className="text-secondary">environment:</span> <span className="text-green-500">'production'</span></div>
            </div>
            <div>{`});`}</div>
            <div className="pt-2"></div>
            <div className="text-muted-foreground">// Make API call</div>
            <div><span className="text-primary">const</span> response = <span className="text-primary">await</span> develix.<span className="text-accent">projects</span>.<span className="text-secondary">getAll</span>();</div>
            <div>console.<span className="text-accent">log</span>(response.data);</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'architecture': return renderArchitecture();
      case 'performance': return renderPerformance();
      case 'security': return renderSecurity();
      case 'api': return renderAPI();
      default: return renderArchitecture();
    }
  };

  return (
    <div className="bg-card rounded-2xl border border-border brand-shadow-card p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="font-space-grotesk font-bold text-2xl text-foreground">
            Technical Specifications
          </h3>
          <p className="text-muted-foreground">
            Deep dive into the technical architecture, performance metrics, and implementation details.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <nav className="flex space-x-8">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm brand-transition ${
                  activeTab === tab?.id
                    ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;