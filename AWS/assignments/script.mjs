import { exec } from "child_process";
import fs from "fs";

// https://stackabuse.com/executing-shell-commands-with-node-js/
exec("aws iam list-users", (error, stdout) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  fs.writeFileSync("aws_iam_users.txt", stdout);

  console.log(`Done!`);
});

exec("aws iam list-groups", (error, stdout) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  fs.writeFileSync("aws_iam_users_groups.txt", stdout);

  console.log(`Done!`);
});
