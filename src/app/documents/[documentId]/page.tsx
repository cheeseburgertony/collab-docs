import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentPage = async ({ params }: DocumentPageProps) => {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#F8FBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentPage;
