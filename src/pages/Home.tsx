import bg from "@/assets/Background.png";
import pattern from "@/assets/Pattern.png";
import Xarrow, { Xwrapper } from "react-xarrows";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const avatars = [
  {
    id: "node1",
    top: "25%",
    left: "18%",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  },
  {
    id: "node2",
    top: "45%",
    left: "8%",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
  },
  {
    id: "node3",
    top: "65%",
    left: "22%",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  {
    id: "node4",
    top: "75%",
    left: "38%",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
  },
  {
    id: "node5",
    top: "55%",
    left: "32%",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
  },
  {
    id: "node6",
    top: "22%",
    left: "68%",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
  },
  {
    id: "node7",
    top: "60%",
    left: "62%",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    id: "node8",
    top: "30%",
    left: "78%",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zara",
  },
  {
    id: "node9",
    top: "50%",
    left: "88%",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
  },
  {
    id: "node10",
    top: "70%",
    left: "75%",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
  },
];
const connections = [
  { start: "node1", end: "node2" },
  { start: "node2", end: "node3" },
  { start: "node3", end: "node4" },
  { start: "node4", end: "node5" },
  { start: "node5", end: "node6" },
  { start: "node6", end: "node7" },
  { start: "node7", end: "node8" },
  { start: "node8", end: "node9" },
  { start: "node9", end: "node10" },
  { start: "node10", end: "node1" },
];
const subText =
  "Swipe right to apply instantly, swipe left to move on. Create your own project, become the owner, and manage your team with ease — from approvals to collaboration. Whether you're a developer, designer, or product builder, this platform helps you connect, collaborate, and create real-world projects faster";
function Home() {
  return (
    <Xwrapper>
      <main
        style={{
          backgroundImage: `url(${bg}), radial-gradient(ellipse at center, #1a1a3e 0%, #0d1117 60%, #0a0a0f 100%)`,
          backgroundColor: "#0d1117",
        }}
        className="min-h-screen w-full bg-radial from-fuchsia-800 to-indigo-900"
      >
        <Header />
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            id={avatar.id}
            className="absolute"
            style={{ top: avatar.top, left: avatar.left }}
          >
            <img
              src={pattern}
              alt=""
              className="absolute"
              style={{
                width: "70px",
                height: "70px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "spin 8s linear infinite",
                opacity: 0.7,
              }}
            />
            <img
              src={avatar.src}
              alt="avatar"
              className="relative z-10 rounded-full border-2 border-cyan-500"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        ))}

        {connections.map((conn, i) => (
          <Xarrow
            key={i}
            start={conn.start}
            end={conn.end}
            strokeWidth={1}
            dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: 1 }}
            color="cyan"
            showHead={false}
            curveness={0.4}
          />
        ))}
        <section className="flex flex-col justify-start items-center h-screen pt-24 md:w-xl m-auto p-5 gap-3 z-50">
          <h1 className="text-5xl font-bold font-serif text-center p-2">
            <span className="text-zinc-200">Swipe to Find</span>{" "}
            <span className="text-cyan-600">Your Next Tech Project</span>
          </h1>
          <p className="text-center text-zinc-400">{subText}</p>
          <Button className="bg-cyan-600 hover:bg-zinc-500 overflow-hidden">
            Get Started
          </Button>
        </section>
      </main>
    </Xwrapper>
  );
}

export default Home;
