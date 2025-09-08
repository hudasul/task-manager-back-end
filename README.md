# Task Manager Application back-end 

Task Manager Application Front-end is <a href="https://github.com/hudasul/task-manager-front-end">here</a>


This is the back end of the Task Manger Applicationand it is build using Node.js and Express.js, three models were used in this application user, project, and task model.
<br>


<h2>User Routes</h2>
<table>
  <tr>
    <th>HTTP Method</th>
    <th>URL</th>
    <th>Use Case</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/auth/signup</td>
    <td>Create a new user</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/auth/login</td>
    <td>Log in </td>
  </tr>
</table>
<br>


<h2>Project routes</h2> 
<table>
  <tr>
    <th>HTTP Method</th>
    <th>URL</th>
    <th>Use Case</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/project/new</td>
    <td>Create a new Project</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/project</td>
    <td>get All Projects</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/Project/:id</td>
    <td>Get a specific Project</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/project/:id</td>
    <td>Update a specific project</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/project/:id</td>
    <td>Delete a specific project</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/project/:id/task</td>
    <td>Add a task to a project</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/project/:id/task</td>
    <td>get all Project tasks</td>
  </tr>
</table>

<br>


<h2>Task routes</h2>
<table>
  <tr>
    <th>HTTP Method</th>
    <th>URI</th>
    <th>Use Case</th>
  </tr>
   <tr>
    <td>GET</td>
    <td>/task</td>
    <td>get all tasks</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/task/:id</td>
    <td>Shows specific task</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/task/:id</td>
    <td>Updates a specific task</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/task/:id</td>
    <td>Deletes a specific task</td>
  </tr>
</table>
