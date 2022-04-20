import { createMutationStore } from '@/store/createQueryStore';
import { sendMail } from './newsletter.client';

export const useSendNewsletter = (config = {}) => { 
  return createMutationStore(sendMail, config);
}