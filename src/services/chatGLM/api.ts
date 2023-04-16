import request from 'umi-request';

interface ILoginParams {
  name: string;
  password: string;
}

// request.interceptors.request.use((url, options) => {
//   let { token } = JSON.parse(localStorage.getItem('user') || '');
//   if (null === token) {
//       token = '';
//   }
//   const authHeader = { 
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json',
//     '__tenant': '3a0a90fe-9a0d-70f4-200d-a80a41fb6195' // 用户id
//   };
//   return {
//     url: url,
//     options: { ...options, interceptors: true, headers: authHeader },
//   };
// });

export function loginChatGLM(options: ILoginParams) {
  return request('https://glm-mangement-api.baibaomen.com/api/app/account/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      '__tenant': '3a0a90fe-9a0d-70f4-200d-a80a41fb6195'
    },
    data: options
  })
}

type History = [string, string];
interface ITalkParams {
  prompt: string;
  history: History[];
  max_length?: number;
  top_p?: number;
  temperature?: number;
}

// export function talkChatGLM({ prompt, history, max_length = 2000, top_p = 0.9, temperature = 0.8 }: ITalkParams) {
//   return request('https://glm-mangement-api.baibaomen.com/', {
//     method: 'POST',
//     data: {
//       prompt,
//       history,
//       max_length,
//       top_p,
//       temperature
//     }
//   })
// }