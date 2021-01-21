import { Button } from "@yarn-monorepo/ui/components";

export const App = (props: { title: string }) => (
  <div>
    <h1>{props.title}</h1>
    <Button text="Hello world!" />
  </div>
);
