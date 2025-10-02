import { DraggableWidget } from "../DraggableWidget";
import { ThemeProvider } from "../ThemeProvider";

export default function DraggableWidgetExample() {
  return (
    <ThemeProvider>
      <div className="h-screen">
        <DraggableWidget />
      </div>
    </ThemeProvider>
  );
}
