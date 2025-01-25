import { Editor } from "./editor";

interface DocumentPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentPage = async ({ params }: DocumentPageProps) => {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#F8FBFD]">
      <Editor />
    </div>
  );
};

export default DocumentPage;
