export type Work = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
};

export const works: Work[] = [
  // 実績が追加され次第、以下の形式で追加してください:
  // {
  //   slug: "example-project",
  //   title: "プロジェクト名",
  //   client: "クライアント名",
  //   category: "Webサイト",
  //   summary: "プロジェクト概要",
  //   challenge: "課題",
  //   solution: "制作内容・アプローチ",
  //   result: "成果",
  //   tags: ["Web", "デザイン"],
  // },
];
