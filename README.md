# nest-chat

## Клиент
Клиент требует файл .env
```
docker build -f Dockerfile-client -t nest-chat-client .
```
```
docker run --name chat-client -p 3000:3000 -d nest-chat-client
```

## Сервер
```
docker build -f Dockerfile-server -t nest-chat-server .
```
```
docker run --name chat-server -p 3001:3001 -d nest-chat-server
```

Статическое подключение до БД vkusnuts.ru:5432