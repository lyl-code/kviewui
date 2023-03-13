/**
 * 多个promise顺序执行队列
 * @param {Array<() => Promise<any>>} tasks 待执行的promise任务数组
 * @returns 
 */
export const useTaskReduce = (tasks: Array<() => Promise<any>>): Promise<any> => {
    return tasks.reduce((prev, next) => prev.then(() => next()), Promise.resolve());
}