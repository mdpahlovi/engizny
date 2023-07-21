export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <h4>{title}</h4>
            <div className="space-x-4">{children}</div>
        </div>
    );
}
