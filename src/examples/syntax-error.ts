const syntaxError = {
  "expose": true,
  "statusCode": 400,
  "status": 400,
  "body": "{\n  \"data\": {\n      \"type\": \"FoodLog\",\n      \"attributes\": {\n        \"date\": \"2018-10-10\",\n      },\n      \"relationships\": {\n        \"Food\": {\n          \"data\": {\n            \"type\": \"VivanteHealthFood\",\n            \"id\": \"b6067742-fd48-47cd-8800-d74337b08f10\"\n          }\n        }\n      }\n    }\n}\n",
  "type": "entity.parse.failed"
}

/**
 * It is SyntaxError. After posting food without date
 **/