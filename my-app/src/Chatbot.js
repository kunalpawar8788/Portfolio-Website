import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Prevent multiple script loads
    if (document.getElementById("botpress-script")) return;

    // Create script
    const script = document.createElement("script");
    script.id = "botpress-script";
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;

    // Initialize after script loads
    script.onload = () => {
      window.botpressWebChat.init({
        botId: "b924e289-db12-47ae-ab3a-7ab96d956443",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "YOUR_CLIENT_ID_HERE", // ← replace with your actual clientId from Botpress Studio
        botName: "Kunal Assistant",
        composerPlaceholder: "Type your message...",

        theme: "light",
        themeColor: "#1f2a44",
        backgroundColor: "#ffffff",
        textColor: "#000000",

        showCloseButton: true,
        enableConversationDeletion: true
      });

      // Optional: auto-open chat after 2 seconds
      setTimeout(() => {
        window.botpressWebChat.sendEvent({ type: "show" });
      }, 2000);
    };

    // Inject script
    document.body.appendChild(script);
  }, []);

  return null;
};

export default Chatbot;
