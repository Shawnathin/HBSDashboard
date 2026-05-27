# Business Database Schema Suggestion

Suggested database: PostgreSQL

This app currently has business data for clients, appointments, services, products, inventory, staff, crews, service tickets, cue repairs, custom orders, notes, chat, projects, beta feedback, and account security.

The recommendation is to move from storing whole app modules as JSON blobs into a normalized PostgreSQL schema. Use normal tables for core business records, and keep `jsonb` only for snapshots, flexible metadata, audit history, or future-proof fields.

## Main Design Goals

- Keep clients, jobs, services, products, tickets, payments, notes, and projects searchable.
- Use foreign keys so records stay connected correctly.
- Preserve price and address snapshots on appointments so old invoices do not change when services or client addresses are edited later.
- Track inventory by location, including warehouse and trucks.
- Support staff login, roles, permissions, notes, messages, and project ownership.
- Add audit history for important changes.

## Core Business Profile

```sql
business_profiles
- id uuid primary key
- name text not null
- phone text
- email text
- city text
- province text
- gst_rate numeric(5,4) default 0
- pst_rate numeric(5,4) default 0
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

## Users, Security, Employees, and Crews

```sql
users
- id uuid primary key
- user_key text unique not null
- name text not null
- role text not null
- avatar_url text
- profile_label text
- focus text
- workspace text
- status text not null default 'active'
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

```sql
account_security
- user_id uuid primary key references users(id)
- pin_hash text
- mfa_enabled boolean not null default false
- passkey_enabled boolean not null default false
- require_password_reset boolean not null default false
- session_timeout_minutes integer not null default 30
- failed_attempts integer not null default 0
- locked_until timestamptz
- last_login_at timestamptz
- password_updated_at timestamptz
```

```sql
employee_profiles
- user_id uuid primary key references users(id)
- title text
- department text
- manager_id uuid references users(id)
- employment_type text
- work_location text
- hire_date date
- employment_status text not null default 'active'
- time_off_hours numeric(8,2) not null default 0
- used_time_off_hours numeric(8,2) not null default 0
- permissions text[] not null default '{}'
```

```sql
crews
- id uuid primary key
- name text not null
- lead_name text
- area text
- active boolean not null default true
```

```sql
crew_members
- crew_id uuid references crews(id)
- user_id uuid references users(id)
- role text
- primary key (crew_id, user_id)
```

## Clients and Addresses

```sql
clients
- id uuid primary key
- customer_number text
- name text not null
- phone text
- email text
- status text not null default 'active'
- notes text
- tags text[] not null default '{}'
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

```sql
client_addresses
- id uuid primary key
- client_id uuid not null references clients(id)
- label text not null default 'Main'
- address text not null
- notes text
- is_primary boolean not null default false
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

## Services

```sql
services
- id uuid primary key
- item_number text
- sku text
- name text not null
- category text not null
- duration_minutes integer not null default 0
- price numeric(10,2)
- color text
- active boolean not null default true
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

## Products and Inventory

```sql
products
- id uuid primary key
- item_number text
- sku text
- name text not null
- category text not null
- unit text not null default 'ea'
- cost numeric(10,2)
- price numeric(10,2)
- reorder_point numeric(10,2) not null default 0
- active boolean not null default true
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

```sql
inventory_locations
- id uuid primary key
- name text not null
- type text not null
- assigned_user_id uuid references users(id)
- active boolean not null default true
```

Examples for `type`: `warehouse`, `truck`, `returned`, `used`, `adjustment`.

```sql
inventory_balances
- product_id uuid references products(id)
- location_id uuid references inventory_locations(id)
- quantity numeric(10,2) not null default 0
- primary key (product_id, location_id)
```

```sql
inventory_movements
- id uuid primary key
- product_id uuid not null references products(id)
- movement_type text not null
- quantity numeric(10,2) not null
- from_location_id uuid references inventory_locations(id)
- to_location_id uuid references inventory_locations(id)
- appointment_id uuid
- installer_id uuid references users(id)
- note text
- created_by uuid references users(id)
- created_at timestamptz not null default now()
```

## Appointments and Jobs

```sql
appointments
- id uuid primary key
- client_id uuid references clients(id)
- address_id uuid references client_addresses(id)
- address_snapshot text
- crew_id uuid references crews(id)
- appointment_date date not null
- appointment_time time
- status text not null default 'booked'
- type text not null default 'job'
- title text
- employee_id uuid references users(id)
- time_off_id uuid
- time_off_type text
- notes text
- completed_at timestamptz
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

```sql
appointment_services
- appointment_id uuid references appointments(id)
- service_id uuid references services(id)
- service_name_snapshot text
- price_snapshot numeric(10,2)
- sort_order integer not null default 0
- primary key (appointment_id, service_id)
```

## Payments

```sql
payments
- id uuid primary key
- appointment_id uuid not null references appointments(id)
- amount numeric(10,2) not null
- method text not null
- method_label text
- paid_date date not null
- paid_at timestamptz not null default now()
- reference text
- notes text
- received_by uuid references users(id)
```

## Service Tickets

```sql
service_tickets
- id uuid primary key
- client_id uuid references clients(id)
- appointment_id uuid references appointments(id)
- title text not null
- issue text
- status text not null default 'intake'
- priority text not null default 'normal'
- product text
- serial_number text
- warranty_expires date
- submitted_at date
- next_step text
- owner_id uuid references users(id)
- portal_visible boolean not null default true
- source_beta_feedback_id uuid
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

## Cue Repairs

```sql
cue_repairs
- id uuid primary key
- repair_number text unique
- customer_name text not null
- phone text
- email text
- cue_description text
- repair_needed text
- notes text
- status text not null default 'dropped_off'
- dropped_off_at date
- completed_at date
- picked_up_at date
- quoted_price numeric(10,2)
- owner_id uuid references users(id)
- email_notified_at timestamptz
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

## Custom Orders

```sql
custom_orders
- id uuid primary key
- client_id uuid not null references clients(id)
- item text not null
- finish text
- order_ref text
- production_ref text
- status text not null default 'ordered'
- ordered_at date
- production_sent_at date
- production_done_at date
- shipped_at date
- arrived_at date
- target_arrival_at date
- install_date date
- install_time time
- install_crew_id uuid references crews(id)
- appointment_id uuid references appointments(id)
- owner_id uuid references users(id)
- notes text
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

## Notes

```sql
notes
- id uuid primary key
- title text not null
- body text
- owner_id uuid not null references users(id)
- status text not null default 'active'
- priority text not null default 'normal'
- color text
- due_date date
- reminder_at timestamptz
- reminder_done boolean not null default false
- tags text[] not null default '{}'
- client_id uuid references clients(id)
- appointment_id uuid references appointments(id)
- source_thread_id uuid
- source_message_id uuid
- pinned boolean not null default false
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

```sql
note_shares
- note_id uuid references notes(id)
- user_id uuid references users(id)
- primary key (note_id, user_id)
```

## Chat

```sql
chat_threads
- id uuid primary key
- name text
- type text not null
- project_id uuid
- created_at timestamptz not null default now()
```

```sql
chat_thread_members
- thread_id uuid references chat_threads(id)
- user_id uuid references users(id)
- primary key (thread_id, user_id)
```

```sql
chat_messages
- id uuid primary key
- thread_id uuid not null references chat_threads(id)
- sender_id uuid not null references users(id)
- recipient_id uuid references users(id)
- body text not null
- note_id uuid references notes(id)
- project_id uuid
- created_at timestamptz not null default now()
- delivered_at timestamptz
```

```sql
chat_message_reads
- message_id uuid references chat_messages(id)
- user_id uuid references users(id)
- read_at timestamptz not null default now()
- primary key (message_id, user_id)
```

## Projects

```sql
projects
- id uuid primary key
- title text not null
- owner_id uuid references users(id)
- status text not null default 'suggested'
- progress integer not null default 0
- summary text
- next_step text
- suggested_by_id uuid references users(id)
- suggestion_state text
- responded_at timestamptz
- labels text[] not null default '{}'
- priority text not null default 'normal'
- due_date date
- column_order integer not null default 0
- automation_id uuid
- automation_period text
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

```sql
project_checklist_items
- id uuid primary key
- project_id uuid not null references projects(id)
- text text not null
- done boolean not null default false
- sort_order integer not null default 0
```

```sql
project_contributors
- id uuid primary key
- project_id uuid not null references projects(id)
- user_id uuid not null references users(id)
- role text
- status text not null default 'active'
- progress integer not null default 0
```

```sql
project_updates
- id uuid primary key
- project_id uuid not null references projects(id)
- author_id uuid references users(id)
- body text not null
- created_at timestamptz not null default now()
```

```sql
project_automations
- id uuid primary key
- enabled boolean not null default true
- name text not null
- day_of_month integer not null
- title_template text not null
- summary_template text
- next_step_template text
- owner_id uuid references users(id)
- due_days_after_create integer not null default 0
- labels text[] not null default '{}'
- checklist jsonb not null default '[]'
- contributors jsonb not null default '[]'
- last_generated_period text
```

## Beta Feedback and Development

```sql
beta_feedback
- id uuid primary key
- type text not null
- status text not null
- title text not null
- details text
- reporter_id uuid references users(id)
- screenshot_url text
- ticket_id uuid references service_tickets(id)
- project_id uuid references projects(id)
- assigned_to uuid references users(id)
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()
```

```sql
beta_feedback_updates
- id uuid primary key
- feedback_id uuid not null references beta_feedback(id)
- author_id uuid references users(id)
- body text not null
- created_at timestamptz not null default now()
```

## Attachments

```sql
attachments
- id uuid primary key
- owner_type text not null
- owner_id uuid not null
- file_url text not null
- file_name text
- mime_type text
- file_size_bytes bigint
- created_by uuid references users(id)
- created_at timestamptz not null default now()
```

Use this for screenshots, ticket photos, signed documents, cue repair photos, or project files.

## Audit Log

```sql
audit_log
- id uuid primary key
- actor_id uuid references users(id)
- entity_type text not null
- entity_id uuid not null
- action text not null
- before jsonb
- after jsonb
- created_at timestamptz not null default now()
```

This is useful for tracking who changed appointments, prices, payments, client records, tickets, notes, and security settings.

## Recommended Indexes

```sql
create index idx_clients_name on clients using gin (to_tsvector('english', name));
create index idx_clients_phone on clients(phone);
create index idx_clients_email on clients(email);

create index idx_appointments_date on appointments(appointment_date);
create index idx_appointments_client on appointments(client_id);
create index idx_appointments_crew on appointments(crew_id);
create index idx_appointments_status on appointments(status);

create index idx_service_tickets_status on service_tickets(status);
create index idx_service_tickets_client on service_tickets(client_id);
create index idx_service_tickets_owner on service_tickets(owner_id);

create index idx_notes_owner on notes(owner_id);
create index idx_notes_client on notes(client_id);
create index idx_notes_reminder on notes(reminder_at) where reminder_done = false;

create index idx_projects_owner on projects(owner_id);
create index idx_projects_status on projects(status);

create index idx_products_sku on products(sku);
create index idx_inventory_movements_product on inventory_movements(product_id);
```

## What Should Stay JSONB

Use `jsonb` for:

- Audit before/after snapshots.
- Imported legacy records during migration.
- Project automation templates if they change often.
- Attachment metadata.
- Temporary sync metadata.
- Flexible settings that do not need reporting.

Avoid `jsonb` for:

- Clients.
- Appointments.
- Payments.
- Products.
- Services.
- Tickets.
- Notes.
- Projects.

Those should be real tables because the app needs to search, filter, report, and connect them.

## Migration Strategy

1. Create the new PostgreSQL tables.
2. Import users, crews, services, products, and clients first.
3. Import client addresses.
4. Import appointments and appointment services.
5. Import payments from appointment payment objects.
6. Import tickets, cue repairs, custom orders, notes, chat, projects, and feedback.
7. Keep original legacy JSON in a temporary `legacy_imports` table until the migration is verified.

Optional legacy table:

```sql
legacy_imports
- id uuid primary key
- source_key text not null
- source_id text
- raw_data jsonb not null
- imported_at timestamptz not null default now()
```

## Best Next Step

Start with these tables first:

1. `users`
2. `clients`
3. `client_addresses`
4. `services`
5. `appointments`
6. `appointment_services`
7. `payments`
8. `service_tickets`
9. `products`
10. `inventory_locations`
11. `inventory_balances`
12. `inventory_movements`

That gives the app a strong business foundation before moving notes, chat, projects, and beta feedback.
