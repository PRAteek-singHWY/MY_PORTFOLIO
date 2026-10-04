import React from "react";

// A failed model or decoder load must not take the page down with it.
// Inside the shared canvas an uncaught error would unmount the whole app,
// so each scene gets its own boundary and simply renders nothing on failure.
class SceneBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.warn("3D scene failed to load, continuing without it:", error?.message || error);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default SceneBoundary;
