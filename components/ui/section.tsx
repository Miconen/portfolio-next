type SectionProps = {
    children?: React.ReactNode;
    fullWidth?: boolean;
    id?: string;
    condition?: boolean;
};

export default function Section(props: SectionProps) {
    const isContainer = props.fullWidth ? "" : "container";

    console.log("condition:", props.id, props.condition)

    if (props.condition === false) return;

    return (
        <section id={props.id} className="w-full mb-64 scroll-m-24">
            <div className={isContainer}>{props.children}</div>
        </section>
    );
}
