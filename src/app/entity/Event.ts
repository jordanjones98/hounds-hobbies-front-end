import { JsonObject, JsonProperty } from 'json2typescript';

import { Class } from './Class';

@JsonObject
export class Event {

  @JsonProperty("id", Number, false)
  id: number = undefined;

  @JsonProperty("name", String)
  name: string = undefined;

  @JsonProperty("about", String)
  about: string = undefined;

  @JsonProperty("date", String)
  date: string = undefined;

  @JsonProperty("slug", String)
  slug: string = undefined;

  @JsonProperty("classes", [Class])
  classes: Class[] = undefined;

  @JsonProperty("truncateAbout", String)
  truncateAbout: string = undefined;
}
