import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Globe2, icons, Landmark, Plane, Send, TentTree } from 'lucide-react';

const Hero = () => {
	const suggestions = [
		{
			title: 'Plan a new trip',
			icon: <Globe2 className="text-blue-400 h-5 w-5" />,
		},
		{
			title: 'Give me a suggestion',
			icon: <Plane className="text-green-500 h-5 w-5" />,
		},
		{
			title: 'Show me some hidden gems',
			icon: <Landmark className="text-orange-500 h-5 w-5" />,
		},
		{
			title: 'Feeling adventurous? Try those!',
			icon: <TentTree className="text-yellow-600 h-5 w-5" />,
		},
	];

	return (
		<div className="mt-24 flex items-center w-full justify-center">
			<div className="max-w-3xl w-full text-center space-y-6">
				{/* Title */}
				<h1 className="text-xl md:text-5xl font-bold">
					Hey, I'm your personal{' '}
					<span className="text-primary">AI Trip Planner</span>
				</h1>
				<p className="text-lg">
					Tell me your travel plans and I'll help you organize your trip in seconds!
				</p>

				{/* Input area */}
				<div className="">
					<div className="border rounded-2xl p-4 shadow relative">
						<Textarea
							placeholder="Describe your trip plans here..."
							className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
						/>
						<Button
							size={'icon'}
							className="absolute bottom-4 right-4"
						>
							<Send className="h-4 w-4" />
						</Button>
					</div>
				</div>

				{/* Suggestions */}
				<div className="flex gap-5">
					{suggestions.map((suggestions, index) => (
						<div
							className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-gray-600/80 hover:text-white ease-in-out"
							key={index}
						>
							{suggestions.icon}
							<h2 className="text-xs">{suggestions.title}</h2>
						</div>
					))}
				</div>

                {/* Video section?  */}
			</div>
		</div>
	);
};

export default Hero;
