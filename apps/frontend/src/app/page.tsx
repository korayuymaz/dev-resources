import AddResourceForm from "@/components/AddResourceForm";
import ResourceList from "@/components/ResourceList";

export default function Home() {
	return (
		<div className="container mx-auto mt-10 flex flex-col gap-4">
			<h1 className="text-2xl font-bold">Resource List</h1>
			<ResourceList />
			<h1 className="text-2xl font-bold">Add Resource</h1>
			<div className="flex flex-col gap-4">
				<AddResourceForm />
			</div>
		</div>
	);
}
