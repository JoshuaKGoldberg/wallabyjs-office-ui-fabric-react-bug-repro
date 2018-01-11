/**
 * Plain object container of string-keyed items.
 */
declare interface IDictionary<TItem> {
	[i: string]: TItem | undefined;
}
