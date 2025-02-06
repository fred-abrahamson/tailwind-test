export const ControlsUiShot = () => {
  return (
    <div className="h-auto w-auto max-w-[400px]">
      <div className="flex flex-col items-center gap-1">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background/90 text-xl font-medium backdrop-blur-lg">
          W
        </div>
        <div className="flex gap-1">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background/90 text-xl font-medium backdrop-blur-lg">
            A
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background/90 text-xl font-medium backdrop-blur-lg">
            S
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background/90 text-xl font-medium backdrop-blur-lg">
            D
          </div>
        </div>
      </div>
    </div>
  );
};
