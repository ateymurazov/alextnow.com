import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null, errorInfo: null };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    // Keep console output too for tooling
    // eslint-disable-next-line no-console
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ error: null, errorInfo: null });
  };

  render() {
    const { error, errorInfo } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="min-h-screen bg-background text-foreground p-6 sm:p-10 font-mono">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-destructive mb-2">
              Render Error
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
              {error.name}: {error.message}
            </h1>
            <p className="text-sm text-muted-foreground">
              The preview failed to render. Details below.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Stack trace
            </h2>
            <pre className="text-xs bg-secondary/60 border border-border rounded-lg p-4 overflow-auto whitespace-pre-wrap break-words max-h-80">
              {error.stack ?? '(no stack available)'}
            </pre>
          </section>

          {errorInfo?.componentStack && (
            <section className="mb-6">
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Component stack
              </h2>
              <pre className="text-xs bg-secondary/60 border border-border rounded-lg p-4 overflow-auto whitespace-pre-wrap break-words max-h-80">
                {errorInfo.componentStack}
              </pre>
            </section>
          )}

          <button
            onClick={this.handleReset}
            className="px-4 py-2 rounded-full bg-foreground text-background text-sm hover:opacity-90 transition-opacity"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
