import { UserCard } from "../UserCard/UserCard";
import userInfo from "../../data/user.json";

import uploadStats from "../../data/data.json";
import { Statistic } from "../StatSection/StatSection";

import friends from "../../data/friends.json";
import { FriendListItem } from "../FriendsList/FriendsList";

import transactions from "../../data/transactions.json";
import { TransactionHistory } from "../Transaction/Transaction";

// syles
import css from "./app.module.css";

function App(params) {
  return (
    <div className={css["container"]}>
      <UserCard {...userInfo} />

      <Statistic title="Upload stats" stats={uploadStats} />
      <Statistic stats={uploadStats} />

      <FriendListItem friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export { App };
