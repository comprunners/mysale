import { ChatWidget } from "../ChatWidget";
import { ThemeProvider } from "../ThemeProvider";

export default function ChatWidgetExample() {
  return (
    <ThemeProvider>
      <div className="h-screen">
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}
