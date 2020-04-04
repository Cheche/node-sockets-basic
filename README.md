# Sockets

This is only an example to use Sockets. It doesn't have a graphic interface.

This project includes Docker files to run in containers.

## Remember

You need to install all dependencies with the following command.

```
npm install
```

# Docker Notes

- exec a shell on this docker: docker exec -it node-sockets-basic_app sh --color=auto

- Install new dependencies from inside the container.

- Build the project from inside the container.

- If you erase the dist folder, you need to rebuild it.

- If you erase the node_modules folder, this deletes the reference on the container. You need reinstall dependencies with ```npm install`` inside of the container.
