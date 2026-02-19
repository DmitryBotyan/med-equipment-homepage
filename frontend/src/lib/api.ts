export interface QuoteRequest {
  name: string
  company: string
  email: string
  phone?: string
  productInterest?: string
  message?: string
}

export interface ContactRequest {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  interest: string
}

interface ApiResponse {
  success: boolean
  id: string
  message: string
}

const wait = (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms)
})

const createSuccessResponse = (message: string): ApiResponse => {
  return {
    success: true,
    id: `demo_${Date.now()}`,
    message,
  }
}

export async function submitQuoteRequest(_payload: QuoteRequest) {
  await wait(450)
  return createSuccessResponse('Запрос цены принят')
}

export async function submitContactRequest(_payload: ContactRequest) {
  await wait(450)
  return createSuccessResponse('Сообщение принято')
}
