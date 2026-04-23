import { Metadata } from "next";
import RoboDoneContent from "./RoboDoneContent";

export const metadata: Metadata = {
    title: "ロボット制作プログラミング教室ロボ団高岡校",
    description: "富山県高岡市のレゴ・ロボットプログラミング教室。年長から小学生まで、好奇心を学びに変え、理数・ITに強い子どもを育てます。無料体験会受付中！",
    keywords: ["ロボ団", "高岡市", "プログラミング教室", "レゴ", "STEAM教育", "ロボット制作"],
    openGraph: {
        title: "ロボット制作プログラミング教室ロボ団高岡校 | 株式会社ル・ソレイユ",
        description: "年長から小学生対象。レゴ・ロボット制作×プログラミング教室。高岡市で未来のチカラを育みます。",
    },
};

export default function RoboDonePage() {
    return <RoboDoneContent />;
}
