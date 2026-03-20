import React, { useState, useRef } from "react";
import { X, Save, ChevronDown, Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditProfilePage: React.FC = () => {
  const [stacks, setStacks] = useState<string[]>(["HTML", "CSS", "PHP"]);
  const [inputValue, setInputValue] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [profileImage, setProfileImage] = useState<string>(
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Hsu"
  );

  const handleEditImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setProfileImage(reader.result); 
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleAddStack = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !stacks.includes(trimmedValue)) {
      setStacks([...stacks, trimmedValue]);
      setInputValue("");
    }
  };

  const handleDeleteStack = (stackToDelete: string) => {
    setStacks(stacks.filter((s) => s !== stackToDelete));
  };

  return (
    <div className="min-h-screen py-5 px-4 md:px-8 lg:px-16 flex flex-col justify-start items-start">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-zinc-200 leading-relaxed mb-6 lg:mb-10">
        My <span className="text-cyan-400">Profile</span>
      </h1>

      <div className="relative flex flex-col items-center py-8 px-6 md:py-10 md:px-10 lg:py-12 lg:px-16 w-full md:max-w-4xl lg:max-w-full min-h-[500px] bg-white/10 backdrop-blur-lg rounded-3xl border border-white/5">
        <div className="relative mb-12 group">
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-zinc-700 shadow-inner">
            <img
              src={profileImage} 
              alt="Profile Avatar"
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleImageChange}
          />

          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-1 right-1 h-8 w-8 rounded-full bg-white/45 hover:bg-cyan-600 hover:text-white"
            onClick={handleEditImageClick} 
          >
            <Pencil size={14} />
          </Button>
        </div>

        {/* Form Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200 ml-1">
              Name
            </label>
            <Input
              placeholder="Full Name"
              defaultValue="Kelvin Jack"
              className="bg-transparent border-zinc-200 text-zinc-200 focus:ring-cyan-500/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200 ml-1">
              Email
            </label>
            <Input
              type="email"
              placeholder="email@example.com"
              defaultValue="user@gmail.com"
              className="bg-transparent border-zinc-200 text-zinc-200"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200 ml-1">
              Preferred Role
            </label>
            <div className="relative">
              <select className="flex h-10 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none">
                <option className="bg-gray-500">Front-End</option>
                <option className="bg-gray-500">Back-End</option>
                <option className="bg-gray-500">Full-Stack</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-zinc-200 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200 ml-1">
              Password
            </label>
            <Input
              type="password"
              defaultValue="password123"
              className="bg-transparent border-zinc-200 text-zinc-200"
            />
          </div>
        </div>

        <div className="w-full mb-10">
          <label className="text-sm font-medium text-zinc-400 ml-1 mb-3 block">
            Tech Stacks
          </label>
          <div className="flex gap-6 mb-10">
            <Input
              type="text"
              placeholder="NextJS"
              className="bg-transparent border-zinc-200 text-zinc-200"
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && handleAddStack()} 
            />
            <Button
              variant="outline"
              className="px-10 bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/40 border-none"
              onClick={handleAddStack} 
            >
              Add
            </Button>
          </div>
          <div className="w-full min-h-[160px] bg-transparent border border-zinc-200 rounded-xl p-4 flex flex-wrap content-start gap-3">
            {stacks.map((stack) => (
              <div
                key={stack}
                className="flex items-center gap-2 px-3 py-1 bg-cyan-600 text-white border border-cyan-800/50 rounded-md text-xs font-semibold animate-in fade-in zoom-in duration-300"
              >
                {stack}
                <button 
                  className="text-red-600 border-none" 
                  onClick={() => handleDeleteStack(stack)} 
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-start gap-4 mt-auto">
          <Button
            variant="outline"
            className="px-8 border-2 border-cyan-700 text-white bg-transparent hover:bg-white/5 hover:text-white"
          >
            <X className="mr-2 h-4 w-4" /> Cancel
          </Button>

          <Button className="px-10 bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/40">
            <Save className="mr-2 h-4 w-4" /> Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;