## Register

| Attributes | Tipe Data | Deskripsi                                |
| ---------- | --------- | ---------------------------------------- |
| username   | String    | Nama akun & untuk autentifikasi pengguna |
| password   | String    | Untuk autentifikasi pengguna             |
| email      | String    | Data diri pengguna                       |

**Request :**

- Method : Post
- Endpoint : auth/register
- Header :
  - Content-Type : Application/json
  - Accept : application/json
- Body :
  ![body-register](./img/body-regis.png)

**Response :**
![response-register](./img/response-regis.png)

---

## Login

| Attributes | Tipe Data | Deskripsi                                |
| ---------- | --------- | ---------------------------------------- |
| username   | String    | Nama akun & untuk autentifikasi pengguna |
| password   | String    | Untuk autentifikasi pengguna             |

**Request :**

- Method : Post
- Endpoint : auth/login
- Header :
  - Content-Type : Application/json
  - Accept : application/json
- Body :
  ![body-login](./img/body-login.png)

**Response :**
![response-login](./img/response-login.png)

---

## Todo

#### Create Todo

| Attributes | Tipe Data | Deskripsi       |
| ---------- | --------- | --------------- |
| todo       | String    | Judul todo      |
| detail     | String    | Penjelasan todo |

**Request :**

- Method : Post
- Endpoint : todo/createTodo
- Header :
  - Content-Type : Application/json
  - Accept : application/json
  - Authorization : bearer [jwt]
- Body :
  ![body-createTodo](./img/body-createTodo.png)

**Response :**
![response-createTodo](./img/response-createTodo.png)

---

#### Update Todo

**Request :**

- Method : Post
- Endpoint : todo/updateTodo?idTodo=637091365fe389cae58e7f1b
- Header :
  - Content-Type : Application/json
  - Accept : application/json
- Body :
  ![body-updateTodo](./img/body-updateTodo.png)

**Response :**
![response-updateTodo](./img/response-updateTodo.png)

---

#### Get Detail Todo

**Request :**

- Method : Get
- Endpoint : todo/getDetailTodo?idTodo=637094875fe389cae58e7f21
- Header :
  - Content-Type : Application/json
  - Accept : application/json
  - Authorization : bearer [jwt]

**Response :**
![response-getDetailTodo](./img/response-getdetailTodo.png)

---

#### Get All Todo

**Request :**

- Method : Get
- Endpoint : todo/getAllTodo
- Header :
  - Content-Type : Application/json
  - Accept : application/json
  - Authorization : bearer [jwt]

**Response :**
![response-getAllTodo](./img/response-getallTodo.png)

---

#### Delete Todo

**Request :**

- Method : Delete
- Endpoint : todo/deleteTodo?idTodo=637094875fe389cae58e7f21
- Header :
  - Content-Type : Application/json
  - Accept : application/json
  - Authorization : bearer [jwt]

**Response :**
![response-deleteTodo](./img/response-deleteTodo.png)

---

#### Delete All Todo

**Request :**

- Method : Delete
- Endpoint : todo/deleteAllTodo
- Header :
  - Content-Type : Application/json
  - Accept : application/json
  - Authorization : bearer [jwt]

**Response :**
![response-deleteAllTodo](./img/response-deleteAllTodo.png)
