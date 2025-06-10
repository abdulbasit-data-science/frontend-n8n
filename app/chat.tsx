"use client"
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import "./style.css"
export const ChatApp = () => {
  useEffect(() => {
    createChat({
      
      webhookUrl: 'https://abdulbasit-n8n.app.n8n.cloud/webhook/4b21e5ab-a0c1-47a5-a227-4dc741d14db0/chat',
      webhookConfig: {
		method: 'POST',
		headers: {}
	},
	target: '#n8n-chat',
	mode: 'window',
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	metadata: {},
	showWelcomeScreen: false,
	defaultLanguage: 'en',
	initialMessages: [
		
	],
	i18n: {
	 en: {
			title: 'Hi there! 👋',
			subtitle: "Start a chat. We're here to help you 24/7.",
			footer: '',
			getStarted: 'New Conversation',
			inputPlaceholder: 'Type your question..',
      closeButtonTooltip: 'Close chat',
		},
	},

    });
  }, []);

  return (<div></div>);
};