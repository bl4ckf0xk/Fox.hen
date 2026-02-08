export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-white">Fox</span>
            <span className="text-primary">.hen</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Next-generation CTF platform where attackers are judged by intelligence, stealth, and
            realism
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-surface p-6 rounded-lg border border-surface-highlight hover:border-primary transition-colors">
            <h3 className="text-2xl font-semibold mb-3 text-primary">
              Adaptive AI Targets
            </h3>
            <p className="text-text-muted">
              Intelligent systems that learn from attacker behavior and dynamically increase
              difficulty
            </p>
          </div>

          <div className="bg-surface p-6 rounded-lg border border-surface-highlight hover:border-stealth-green transition-colors">
            <h3 className="text-2xl font-semibold mb-3 text-stealth-green">
              Stealth-Based Scoring
            </h3>
            <p className="text-text-muted">
              Success measured by how quietly and realistically you compromise systems
            </p>
          </div>

          <div className="bg-surface p-6 rounded-lg border border-surface-highlight hover:border-alert-red transition-colors">
            <h3 className="text-2xl font-semibold mb-3 text-alert-red">
              Real-World Scenarios
            </h3>
            <p className="text-text-muted">
              Practice against systems that respond like actual production environments
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-surface px-6 py-3 rounded-full border border-primary/50">
            <div className="w-2 h-2 bg-stealth-green rounded-full animate-pulse"></div>
            <span className="text-white">System Status: Active</span>
          </div>
        </div>

        {/* Demo code block to show mono font */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-surface p-6 rounded-lg border border-surface-highlight">
            <h3 className="text-lg font-semibold mb-3 text-primary">Sample Code Block</h3>
            <pre className="text-sm text-stealth-green font-mono">
              <code>
{`// Using JetBrains Mono for code
function exploit() {
  return "stealth mode activated";
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
