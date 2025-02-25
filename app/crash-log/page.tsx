"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@/components/ui/dialog";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type LogItemType = {
  message: string;
  build: string;
  release_track: string;
  session_length: string;
  date: string;
};

type StackTraceType = {
  type: string;
  message: string;
  detailed: string;
};

const LOG_LIST: LogItemType[] = [
  {
    message: "error eventHandler: divide by zero",
    build: "#795",
    release_track: "Open testing",
    session_length: "00:07:21",
    date: "Feb 07 12:33:13",
  },
  {
    message: "message handler: null function or function signature mismatch",
    build: "#795",
    release_track: "Production",
    session_length: "01:26:45",
    date: "Feb 07 12:22:33",
  },
  {
    message: "error eventHandler: divide by zero",
    build: "#795",
    release_track: "Open testing",
    session_length: "00:48:32",
    date: "Feb 07 12:13:05",
  },
  {
    message: "error eventHandler: integer divide by zero",
    build: "#795",
    release_track: "Open testing",
    session_length: "00:00:40",
    date: "Feb 07 11:23:20",
  },
  {
    message: "message handler: null function or function signature mismatch",
    build: "#795",
    release_track: "Production",
    session_length: "00:03:02",
    date: "Feb 07 11:22:02",
  },
  {
    message: "error eventHandler: table index is out of bounds",
    build: "#795",
    release_track: "Closed testing",
    session_length: "00:09:38",
    date: "Feb 07 11:18:33",
  },
  {
    message: "error eventHandler: Maximum call stack size exceeded",
    build: "#795",
    release_track: "Closed testing",
    session_length: "00:05:44",
    date: "Feb 07 11:10:57",
  },
  {
    message: "error eventHandler: divide by zero",
    build: "#795",
    release_track: "Production",
    session_length: "00:02:14",
    date: "Feb 07 10:59:40",
  },
  {
    message:
      "error eventHandler: WebGL2RenderingContext.bufferData: Argument 2 can't be an ArrayBuffer or an ArrayBufferView larger than 2 GB",
    build: "#795",
    release_track: "Production",
    session_length: "00:48:24",
    date: "Feb 07 10:13:22",
  },
  {
    message: "error eventHandler: integer divide by zero",
    build: "#795",
    release_track: "Production",
    session_length: "00:36:53",
    date: "Feb 07 09:37:43",
  },
  {
    message: "error eventHandler: divide by zero",
    build: "#795",
    release_track: "Open testing",
    session_length: "00:07:21",
    date: "Feb 07 12:33:13",
  },
  {
    message: "message handler: null function or function signature mismatch",
    build: "#795",
    release_track: "Production",
    session_length: "01:26:45",
    date: "Feb 07 12:22:33",
  },
  {
    message: "error eventHandler: divide by zero",
    build: "#795",
    release_track: "Open testing",
    session_length: "00:48:32",
    date: "Feb 07 12:13:05",
  },
  {
    message: "error eventHandler: integer divide by zero",
    build: "#795",
    release_track: "Open testing",
    session_length: "00:00:40",
    date: "Feb 07 11:23:20",
  },
  {
    message: "message handler: null function or function signature mismatch",
    build: "#795",
    release_track: "Production",
    session_length: "00:03:02",
    date: "Feb 07 11:22:02",
  },
  {
    message: "error eventHandler: table index is out of bounds",
    build: "#795",
    release_track: "Closed testing",
    session_length: "00:09:38",
    date: "Feb 07 11:18:33",
  },
  {
    message: "error eventHandler: Maximum call stack size exceeded",
    build: "#795",
    release_track: "Closed testing",
    session_length: "00:05:44",
    date: "Feb 07 11:10:57",
  },
  {
    message: "error eventHandler: divide by zero",
    build: "#795",
    release_track: "Production",
    session_length: "00:02:14",
    date: "Feb 07 10:59:40",
  },
  {
    message:
      "error eventHandler: WebGL2RenderingContext.bufferData: Argument 2 can't be an ArrayBuffer or an ArrayBufferView larger than 2 GB",
    build: "#795",
    release_track: "Production",
    session_length: "00:48:24",
    date: "Feb 07 10:13:22",
  },
  {
    message: "error eventHandler: integer divide by zero",
    build: "#795",
    release_track: "Production",
    session_length: "00:36:53",
    date: "Feb 07 09:37:43",
  },
];

const STACK_TRACE: StackTraceType[] = [
  {
    type: "C#",
    message: "DailyLeaguesLogic::GetRankForNewSeason",
    detailed:
      "Game.Logic.DailyLeaguesLogic::GetRankForNewSeason(List<DailyLeaguePlayerHistoryDivisionEntry>,DailyLeagueInfo,SharedGameConfig) (wasm://wasm/1464421e:wasm-function[49524]:0xb677d3)",
  },
  {
    type: "C#",
    message:
      "MetaplayDailyLeaguesLogicProvider::GetCalculatedLeagueRankForNewSeason",
    detailed:
      "_Paddehat.Scripts.Meta.Managers.MetaplayDailyLeaguesLogicProvider::GetCalculatedLeagueRankForNewSeason() (wasm://wasm/1464421e:wasm-function[149464]:0x229f3b9)",
  },
  {
    type: "C#",
    message: "MetaplayDailyLeaguesLogicProvider::TryJoinTournament",
    detailed:
      "_Paddehat.Scripts.Meta.Managers.MetaplayDailyLeaguesLogicProvider::TryJoinTournament() (wasm://wasm/1464421e:wasm-function[149493]:0x22a0319)",
  },
  {
    type: "C#",
    message: "MetaplayDailyLeaguesLogicProvider::Tick",
    detailed:
      "_Paddehat.Scripts.Meta.Managers.MetaplayDailyLeaguesLogicProvider::Tick() (wasm://wasm/1464421e:wasm-function[149492]:0x22a0227)",
  },
  {
    type: "C#",
    message: "TickablesTaskUpdater::UpdateItem",
    detailed:
      "Zenject.TickablesTaskUpdater::UpdateItem(ITickable) (wasm://wasm/1464421e:wasm-function[176446]:0x27e61d0)",
  },
  {
    type: "unity",
    message: "RuntimeInvoker_TrueVoid[?]_RuntimeObject",
    detailed:
      "RuntimeInvoker_TrueVoid[?]_RuntimeObject(void (*)(), MethodInfo const*, void*, void**, void*) (wasm://wasm/1464421e:wasm-function[216973]:0x32cd749)",
  },
  {
    type: "C#",
    message: "TaskUpdater`1::UpdateRange",
    detailed:
      "Zenject.TaskUpdater`1<Unity.IL2CPP.Metadata.__Il2CppFullySharedGenericType>::UpdateRange(Int32,Int32) (wasm://wasm/1464421e:wasm-function[176788]:0x27fb161)",
  },
  {
    type: "C#",
    message: "TaskUpdater`1::UpdateAll",
    detailed:
      "Zenject.TaskUpdater`1<Unity.IL2CPP.Metadata.__Il2CppFullySharedGenericType>::UpdateAll() (wasm://wasm/1464421e:wasm-function[176787]:0x27faff9)",
  },
  {
    type: "C#",
    message: "MonoKernel::Update",
    detailed:
      "Zenject.MonoKernel::Update() (wasm://wasm/1464421e:wasm-function[176381]:0x27e327f)",
  },
  {
    type: "unity",
    message: "RuntimeInvoker_TrueVoid[?]",
    detailed:
      "RuntimeInvoker_TrueVoid[?](void (*)(), MethodInfo const*, void*, void**, void*) (wasm://wasm/1464421e:wasm-function[217577]:0x32d4f70)",
  },
  {
    type: "C++",
    message: "il2cpp::vm::Runtime::InvokeWithThrow",
    detailed:
      "il2cpp::vm::Runtime::InvokeWithThrow(MethodInfo const*, void*, void**) (wasm://wasm/1464421e:wasm-function[224030]:0x334b3c5)",
  },
  {
    type: "C",
    message: "dynCall_iiii",
    detailed:
      "dynCall_iiii (wasm://wasm/1464421e:wasm-function[224926]:0x3372732)",
  },
  {
    type: "C++",
    message: "il2cpp::vm::Runtime::Invoke",
    detailed:
      "il2cpp::vm::Runtime::Invoke(MethodInfo const*, void*, void**, Il2CppException**) (wasm://wasm/1464421e:wasm-function[224001]:0x33479f0)",
  },
  {
    type: "C",
    message: "il2cpp_runtime_invoke",
    detailed:
      "il2cpp_runtime_invoke (wasm://wasm/1464421e:wasm-function[2968]:0x11df2b)",
  },
  {
    type: "C",
    message: "scripting_method_invoke",
    detailed:
      "scripting_method_invoke(ScriptingMethodPtr, ScriptingObjectPtr, ScriptingArguments&, ScriptingExceptionPtr*, bool) (wasm://wasm/1464421e:wasm-function[106201]:0x1aa4fe4)",
  },
  {
    type: "C++",
    message: "ScriptingInvocation::Invoke",
    detailed:
      "ScriptingInvocation::Invoke(ScriptingExceptionPtr*, bool) (wasm://wasm/1464421e:wasm-function[97810]:0x1a06566)",
  },
  {
    type: "C++",
    message: "MonoBehaviour::CallUpdateMethod",
    detailed:
      "MonoBehaviour::CallUpdateMethod(int) (wasm://wasm/1464421e:wasm-function[66161]:0xed1fa8)",
  },
  {
    type: "C++",
    message: "MonoBehaviour::Update",
    detailed:
      "MonoBehaviour::Update() (wasm://wasm/1464421e:wasm-function[66162]:0xed1fbd)",
  },
  {
    type: "C++",
    message: "BaseBehaviourManager::CommonUpdate",
    detailed:
      "void BaseBehaviourManager::CommonUpdate<BehaviourManager>() (wasm://wasm/1464421e:wasm-function[89819]:0x1783bf0)",
  },
  {
    type: "C++",
    message: "BehaviourManager::Update",
    detailed:
      "BehaviourManager::Update() (wasm://wasm/1464421e:wasm-function[89818]:0x1783973)",
  },
  {
    type: "C++",
    message:
      "InitPlayerLoopCallbacks::UpdateScriptRunBehaviourUpdateRegistrator::Forward",
    detailed:
      "InitPlayerLoopCallbacks()::UpdateScriptRunBehaviourUpdateRegistrator::Forward() (wasm://wasm/1464421e:wasm-function[97359]:0x19c5fd7)",
  },
  {
    type: "C",
    message: "ExecutePlayerLoop",
    detailed:
      "ExecutePlayerLoop(NativePlayerLoopSystem*) (wasm://wasm/1464421e:wasm-function[90965]:0x17eb366)",
  },
  {
    type: "C",
    message: "ExecutePlayerLoop",
    detailed:
      "ExecutePlayerLoop(NativePlayerLoopSystem*) (wasm://wasm/1464421e:wasm-function[90965]:0x17eb3d7)",
  },
  {
    type: "C",
    message: "PlayerLoop",
    detailed:
      "PlayerLoop() (wasm://wasm/1464421e:wasm-function[90966]:0x17eb5d5)",
  },
  {
    type: "C",
    message: "MainLoop",
    detailed:
      "MainLoop() (wasm://wasm/1464421e:wasm-function[96231]:0x199eb89)",
  },
  {
    type: "C",
    message: "dynCall_v",
    detailed:
      "dynCall_v (wasm://wasm/1464421e:wasm-function[224933]:0x3372786)",
  },
];

export default function CrashLog() {
  const [selected, setSelected] = React.useState<LogItemType | null>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [showDetailed, setShowDetailed] = React.useState<boolean>(false);
  //  const [tab, setTab] = React.useState<string>("production");
  return (
    <div>
      <section className="border-b border-border">
        <Tabs defaultValue="production">
          <div className="flex w-full justify-center p-4 text-center">
            <TabsList className="grid max-w-max grid-cols-3">
              <TabsTrigger value="production">Production</TabsTrigger>
              <TabsTrigger value="open_testing">Open testing</TabsTrigger>
              <TabsTrigger value="closed_testing">Closed testing</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="production">
            <div className="min-h-64 w-full border-b px-12 py-4">Graph</div>
            <ul className="py-4">
              {LOG_LIST.filter(
                (item) => item.release_track === "Production",
              ).map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    "group flex cursor-pointer items-center gap-8 px-12 py-4 hover:bg-muted",
                  )}
                  onClick={() => {
                    setSelected(item);
                    setIsOpen(true);
                  }}
                >
                  <div className="flex w-full flex-col gap-2 text-base">
                    <span className={cn("text-sm font-medium")}>
                      {item.message}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-normal opacity-80">
                      <span>Build {item.build}</span>·{" "}
                      <span>{item.session_length}</span>
                    </div>
                  </div>
                  <div className="flex shrink-0 text-right text-xs opacity-80">
                    {item.date}
                  </div>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="open_testing">
            <div className="min-h-64 w-full border-b px-12 py-4">Graph</div>
            <ul className="py-4">
              {LOG_LIST.filter(
                (item) => item.release_track === "Open testing",
              ).map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    "group flex cursor-pointer items-center gap-8 px-12 py-4 hover:bg-muted",
                  )}
                  onClick={() => {
                    setSelected(item);
                    setIsOpen(true);
                  }}
                >
                  <div className="flex w-full flex-col gap-2 text-base">
                    <span className={cn("text-sm font-medium")}>
                      {item.message}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-normal opacity-80">
                      <span>Build {item.build}</span>·{" "}
                      <span>{item.session_length}</span>
                    </div>
                  </div>
                  <div className="flex shrink-0 text-right text-xs opacity-80">
                    {item.date}
                  </div>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="closed_testing">
            <div className="min-h-64 w-full border-b px-12 py-4">Graph</div>
            <ul className="py-4">
              {LOG_LIST.filter(
                (item) => item.release_track === "Closed testing",
              ).map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    "group flex cursor-pointer items-center gap-8 px-12 py-4 hover:bg-muted",
                  )}
                  onClick={() => {
                    setSelected(item);
                    setIsOpen(true);
                  }}
                >
                  <div className="flex w-full flex-col gap-2 text-base">
                    <span className={cn("text-sm font-medium")}>
                      {item.message}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-normal opacity-80">
                      <span>Build {item.build}</span>·{" "}
                      <span>{item.session_length}</span>
                    </div>
                  </div>
                  <div className="flex shrink-0 text-right text-xs opacity-80">
                    {item.date}
                  </div>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>

        <Drawer
          open={isOpen}
          onOpenChange={(e: boolean) => {
            setIsOpen(e);
            setSelected(null);
          }}
        >
          {selected && (
            <DrawerContent
              className={`w-[${showDetailed ? "calc(100vw_-_320px)" : "50%"}] transition min-w-[${showDetailed ? "1440px" : "940px"}] overflow-x-hidden overflow-y-scroll`}
            >
              <div className="flex h-full w-full flex-col gap-6 p-12">
                <VisuallyHidden>
                  <DialogTitle>Build {selected.build}</DialogTitle>
                </VisuallyHidden>
                <div>
                  <div className="mb-4 flex items-center gap-2 text-sm font-normal opacity-80">
                    <span>{selected.release_track}</span>·{" "}
                    <span>Build {selected.build}</span>
                  </div>{" "}
                  <h1 className="mb-2 text-xl font-semibold">
                    {selected.message || "No build message"}
                  </h1>
                  <div className="text-sm opacity-50">{selected.date}</div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Chrome</Badge>
                    <Badge variant="secondary">Macintosh</Badge>
                  </div>
                </div>
                <Separator />

                <section className="py-2">
                  <h3 className="mb-2 font-semibold">Memory</h3>
                  <p className="mb-4 text-sm opacity-50">
                    You can run a build as a specific user instead of playing
                    with your Pley account. Enter a user ID or an account email
                    below to run the build.
                  </p>
                  <div className="mb-6 flex gap-4">graph</div>
                </section>

                <section className="py-2 pb-32">
                  <h3 className="mb-2 font-semibold">Stack trace</h3>
                  <p className="mb-4 text-sm opacity-50">
                    Post-processing involves a series of automatic
                    optimizations, adjustments, and compression to ensure your
                    game runs seamlessly on the web in all web browsers. As
                    things change, the build processing pipeline is updated,
                    adding new optimizations, and stability features.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => setShowDetailed(!showDetailed)}
                  >
                    Show details
                  </Button>
                  <ul className="my-8 overflow-x-scroll bg-[#151515]">
                    {STACK_TRACE.map((item, index) => (
                      <li
                        className="flex gap-4 p-4 font-mono text-sm odd:bg-muted"
                        key={index}
                      >
                        <div className="flex w-16 shrink-0 items-center justify-center px-4 py-1">
                          {item.type}
                        </div>
                        <div className="flex shrink-0 flex-col gap-2">
                          <span>{item.message}</span>
                          {showDetailed && (
                            <span className="max-w-full break-all text-xs opacity-80">
                              {item.detailed}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </DrawerContent>
          )}
        </Drawer>
      </section>
    </div>
  );
}
