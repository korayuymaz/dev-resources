import AddResourceForm from "@/components/AddResourceForm";
import ResourceList from "@/components/ResourceList";

export default function Home() {
	return (
		<div className="container mx-auto mt-10 flex flex-col gap-4 md:flex-row">
			<div className="w-full">
				<AddResourceForm />
				<h1 className="text-2xl font-bold mb-4">Resource List</h1>
				<ResourceList />
			</div>
		</div>
	);
}
