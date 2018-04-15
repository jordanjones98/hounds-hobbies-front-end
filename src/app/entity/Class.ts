import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Class {
  @JsonProperty("className", String)
  className: string = undefined;

  @JsonProperty("id", Number)
  id: number = undefined;
}
