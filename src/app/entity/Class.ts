import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Class {
  @JsonProperty("className", String)
  name: string = undefined;
}
