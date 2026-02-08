export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-black">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-cyber-silver">Fox</span>
            <span className="text-cyber-blue">.hen</span>
          </h1>
          <p className="text-xl text-cyber-silver/80 max-w-2xl mx-auto">
            Next-generation CTF platform where attackers are judged by intelligence, stealth, and
            realism
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-cyber-gunmetal p-6 rounded-lg border border-cyber-silver/20 hover:border-cyber-blue transition-colors">
            <h3 className="text-2xl font-semibold mb-3 text-cyber-blue">
              Adaptive AI Targets
            </h3>
            <p className="text-cyber-silver/80">
              Intelligent systems that learn from attacker behavior and dynamically increase
              difficulty
            </p>
          </div>

          <div className="bg-cyber-gunmetal p-6 rounded-lg border border-cyber-silver/20 hover:border-cyber-blue transition-colors">
            <h3 className="text-2xl font-semibold mb-3 text-cyber-blue">
              Stealth-Based Scoring
            </h3>
            <p className="text-cyber-silver/80">
              Success measured by how quietly and realistically you compromise systems
            </p>
          </div>

          <div className="bg-cyber-gunmetal p-6 rounded-lg border border-cyber-silver/20 hover:border-cyber-blue transition-colors">
            <h3 className="text-2xl font-semibold mb-3 text-cyber-blue">
              Real-World Scenarios
            </h3>
            <p className="text-cyber-silver/80">
              Practice against systems that respond like actual production environments
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-cyber-gunmetal px-6 py-3 rounded-full border border-cyber-blue/50">
            <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
            <span className="text-cyber-silver">System Status: Active</span>
          </div>
        </div>
      </div>
    </main>
  );
}
