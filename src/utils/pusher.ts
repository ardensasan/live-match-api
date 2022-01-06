import Pusher from "pusher";

export const newPusher = () => {
  return new Pusher({
    appId: "1326563",
    key: "2199e079bc9ad09b0c70",
    secret: "79a656fe956778d3ff25",
    cluster: "ap1",
    useTLS: true,
  });
};
