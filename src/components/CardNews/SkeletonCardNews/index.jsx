export default function SkeletonCardNews() {
    return (
        <div className="rounded-lg text-justify space-y-2 flex flex-col items-start justify-center">
            <div className="w-full bg-cinza h-64 rounded-lg animate-pulse overflow-hidden flex"></div>
            <p className="text-white h-6 w-full text-sm bg-cinza animate-pulse rounded-lg"></p>
            <span className="bg-cinza h-6 w-1/3 animate-pulse rounded-lg"></span>
        </div>
    );
}