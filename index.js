import {
  WebsocketClient,
} from 'binance'

const startup = () => {
  let wsKey
  const ws = new WebsocketClient({
    api_key: 'xxx',
    api_secret: 'xxx',
    beautify: true,
  })

  ws.on('open', data => {
    console.log('Connected to Binance WebSocket.')
    console.log('WS Key is:', data.wsKey)
    wsKey = data.wsKey
  })
  ws.on('error', error => {
    console.log('WebSocket error:', { error })
  })
  ws.on('reconnecting', () => {
    console.log('Reconnecting to Binance WebSocket.')
  })
  ws.on('reconnected', () => {
    console.log('Reconnected to Binance WebSocket.')
  })

  ws.subscribeUsdFuturesUserDataStream()

  setTimeout(() => {
    ws.close(wsKey, false)
  }, 5000)
}

startup()